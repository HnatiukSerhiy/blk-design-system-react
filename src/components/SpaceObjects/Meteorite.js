import SpaceObjectContent from "../SpaceObjectContent";

const Meteorite = () => {
    const description = `
        A meteorite is a solid piece of debris from an object, such as a comet, asteroid, or meteoroid,
        that originates in outer space and survives its passage through the atmosphere to reach
        the surface of a planet or moon. When the original object enters the atmosphere,
        various factors such as friction, pressure, and chemical interactions with the atmospheric
        gases cause it to heat up and radiate energy. It then becomes a meteor and forms a fireball,
        also known as a shooting star; astronomers call the brightest examples "bolides".
        Once it settles on the larger body's surface, the meteor becomes a meteorite. Meteorites 
        vary greatly in size.`;

    const Img = () => {
        return (
            <img
                src={require("assets/img/meteorite.gif")}
                alt={'meteorite'}
                width={450}
                height={320}
            />)
    }

    return (
        <SpaceObjectContent description={description} header={'Meteorite'} >
            <Img />
        </SpaceObjectContent>
    )
}

export default Meteorite;