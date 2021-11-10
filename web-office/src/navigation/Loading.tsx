interface Props {
    error: boolean;
}

export default ({error = false }: Props) => {
    if (error) {
        console.log(error);
        return <div>Sorry, there was a problem loading the page</div>
    } else return null
}