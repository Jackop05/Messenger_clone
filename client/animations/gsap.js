import { gsap } from "gsap";

const openUserSettings = () => {
    const width = window.innerWidth;  

    gsap.to(".main", { x: width, duration: 2, ease: "power2.inOut" });
    gsap.to(".settings-user", { x: width, duration: 2, ease: "power2.inOut" })
}

export default openUserSettings;