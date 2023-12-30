import { useEffect, useState } from 'react';
import pageStyles from './about.module.scss';
import { TimerContainer } from './timer';

function About() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    let time = 5

    const timeToDays = time * 60 * 60 * 24 * 1000;
    let countDownDate = new Date().getTime() + timeToDays;

    useEffect(() => {
        var updateTime = setInterval(() => {
            var now = new Date().getTime();
            var difference = countDownDate - now;
            var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);
            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            if (difference <= 0) {
                clearInterval(updateTime);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        })

        return () => {
            clearInterval(updateTime);
        }

    }, [time]);

    return (
        <div className={pageStyles['P-about']}>
            <h1>This is About Page.</h1>
            <TimerContainer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            ></TimerContainer>
        </div>
    )
}

export default About