export default function FirstComponent({
    src, bool
}){
    return (
        <>
            <h3> This is my first component! Or is the third? </h3>
            <img src={bool && src}
            alt= ""/>

        </>
    );
}