import SpaceObjectContent from "../SpaceObjectContent";

const Meteoroid = () => {
    const description = `
        A meteoroid is a small rocky or metallic body in outer space. Meteoroids are defined as objects significantly 
        smaller than asteroids, ranging in size from grains to objects up to a meter wide. Objects smaller than this 
        are classified as micrometeoroids or space dust. Most are fragments from comets or asteroids, whereas 
        others are collision impact debris ejected from bodies such as the Moon or Mars. When a meteoroid, comet, 
        or asteroid enters Earth's atmosphere at a speed typically in excess of 20 km/s (72,000 km/h; 45,000 mph), 
        aerodynamic heating of that object produces a streak of light, both from the glowing object and the trail of 
        glowing particles that it leaves in its wake. This phenomenon is called a meteor or "shooting star".`;

    const Img = () => {
        return (
            <img
                alt={'meteoroid'}
                src={require('../../assets/img/meteoroid.gif')}
                width={450}
                height={320}
            />
        )
    }

    return (
        <SpaceObjectContent description={description} header={'Meteoroid'}>
            <Img />
        </SpaceObjectContent>
    )
}

export default Meteoroid;