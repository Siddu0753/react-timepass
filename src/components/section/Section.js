function Section(props) {
    console.log("section props",props);
    const {title,children} = props;
    return (
    <>  
        <h2>{title}</h2>
        {children}

    </>

    );
}

export default Section;