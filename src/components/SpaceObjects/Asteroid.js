import SpaceObjectContent from "../SpaceObjectContent";

const Asteroid = () => {
    const description = `An asteroid is a minor planet of the inner Solar System. Sizes and shapes of asteroids vary 
        significantly, ranging from 1-meter rocks to a dwarf planet almost 1000 km in diameter, they are rocky, 
        metallic or icy bodies with no atmosphere. Of the roughly one million known asteroids the greatest number are 
        located between the orbits of Mars and Jupiter, approximately 2 to 4 AU from the Sun, in the main asteroid belt. 
        Asteroids are generally classified to be of three types: C-type, M-type, and S-type. These were named after and 
        are generally identified with carbonaceous, metallic, and silicaceous compositions, respectively. 
        The sizes of asteroids varies greatly; the largest, Ceres, is almost 1,000 km (600 mi) across and qualifies as 
        a dwarf planet. The total mass of all the asteroids combined is only 3% that of Earth's Moon.`;

    const Img = () => {
        return (
            <img
                src={require('../../assets/img/asteroid.gif')}
                alt={'asteroid'}
                width={450}
                height={320}
            />
        )
    }

    return (
        <SpaceObjectContent description={description} header={'Asteroid'}>
            <Img />
        </SpaceObjectContent>
    )
}

export default Asteroid;