import SpaceObjectContent from "../SpaceObjectContent";

const Nebula = () => {
    const description = `A nebula is a distinct luminescent part of interstellar medium, which can consist of ionized, 
        neutral or molecular hydrogen and also cosmic dust. Nebulae are often star-forming regions, such as in the "Pillars 
        of Creation" in the Eagle Nebula. In these regions, the formations of gas, dust, and other materials "clump" together 
        to form denser regions, which attract further matter, and eventually will become dense enough to form stars. 
        The remaining material is then thought to form planets and other planetary system objects. Most nebulae are 
        of vast size; some are hundreds of light-years in diameter. A nebula that is visible to the human eye from 
        Earth would appear larger, but no brighter, from close by.`;

    const Img = () => {
        return (
            <img
                src={require('../../assets/img/nebula.gif')}
                alt={'nebula'}
                width={450}
                height={290}
            />
        )
    }

    return (
        <SpaceObjectContent description={description} header={'Nebula'}>
            <Img />
        </SpaceObjectContent>
    )
}

export default Nebula;