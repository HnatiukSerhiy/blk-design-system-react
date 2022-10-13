import SpaceObjectContent from "../SpaceObjectContent";

const Comet = () => {
    const description = `
        A comet is an icy, small Solar System body that, when passing close to the Sun, 
        warms and begins to release gases, a process that is called outgassing. 
        This produces a visible atmosphere or coma, and sometimes also a tail. 
        These phenomena are due to the effects of solar radiation and the solar wind acting 
        upon the nucleus of the comet. Comet nuclei range from a few hundred meters to tens of 
        kilometers across and are composed of loose collections of ice, dust, and small rocky particles. 
        The coma may be up to 15 times Earth's diameter, while the tail may stretch beyond one astronomical 
        unit. If sufficiently bright, a comet may be seen from Earth without the aid of a telescope and 
        may subtend an arc of 30° (60 Moons) across the sky.`;

    const Img = () => {
        return (
            <img
                src={require("assets/img/comet.gif")}
                alt={'comet'}
                width={450}
                height={320}
            />
        )
    }

    return (
        <SpaceObjectContent description={description} header={'Comet'} >
            <Img />
        </SpaceObjectContent>
    )
}

export default Comet;