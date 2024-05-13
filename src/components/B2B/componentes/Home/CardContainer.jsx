// React
import React, { useState, useEffect, useMemo, useRef } from 'react';
// Axios
import axios from "axios";
// cookies
import Cookies from 'universal-cookie';
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// components
import TinderCard from 'react-tinder-card'
import TinderCardComponent from './TinderCard';
// functions
import { BackendURL } from '../../../../Config';
// CSS
import './Home.css';



export default function CardContainer({ AllUsersData }) {
    // cookies
    const cookies = new Cookies();
    // Alerts
    const MySwal = withReactContent(Swal)

    const [UserToken, SetUserToken] = useState(cookies.get('codigo'));

    const [currentIndex, setCurrentIndex] = useState(AllUsersData.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(AllUsersData.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < AllUsersData.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)

        const data = {
            codigo: `${UserToken}`,
            codigoLike: nameToDelete,
        }

        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })

        if (direction == 'left') {
            axios({
                method: 'post',
                url: BackendURL('/MatchAle/saveDislike'),
                data: data,
                headers: {
                    "Accept": "application/json"
                },
            }).then(function (response) {
                MySwal.close()

                console.log(response.data);

            }).catch(function (error) {

                console.log(error);
            });
        } else {
            axios({
                method: 'post',
                url: BackendURL('/MatchAle/saveLike'),
                data: data,
                headers: {
                    "Accept": "application/json"
                },
            }).then(function (response) {
                MySwal.close()

            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < AllUsersData.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }


    return (
        <>
            <div className='cardContainer'>

                {AllUsersData.map((user, index) =>
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={user.usuario.nombre}
                        onSwipe={(dir) => swiped(dir, user.codigo, index)}
                        onCardLeftScreen={() => outOfFrame(user.usuario.nombre, index)}
                    >

                        <TinderCardComponent user={user} />
                    </TinderCard>
                )}
            </div>

            <div className='buttons'>
                <button style={{ backgroundColor: !canSwipe && '#cacaca' }} onClick={() => swipe('left')}>No me gusta</button>
                <button style={{ backgroundColor: !canSwipe && '#cacaca' }} onClick={() => swipe('right')}>Me gusta</button>
            </div>

        </>
    )
}