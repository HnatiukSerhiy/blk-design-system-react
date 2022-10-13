import SpaceObjectContent from "../SpaceObjectContent";

const BlackHole = () => {
    const description = `A black hole is a region of spacetime where gravity is so strong that nothing – no
        particles or even electromagnetic radiation such as light – can escape from it. The theory of 
        general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. 
        The boundary of no escape is called the event horizon. Although it has a great effect on the fate and 
        circumstances of an object crossing it, it has no locally detectable features according to general relativity. 
        In many ways, a black hole acts like an ideal black body, as it reflects no light.`;

    const Img = () => {
        return (
            <img
                src={require('../../assets/img/black_hole.gif')}
                alt={'black hole'}
                width={450}
                height={250}
            />
        )
    }

    return (
        <SpaceObjectContent description={description} header={'Black Hole'}>
            <Img />
        </SpaceObjectContent>
    )
}

export default BlackHole;