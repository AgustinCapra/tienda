import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => (
    <Container className='mt-4'>
        <h1>{props.greeting}</h1>
    </Container>
)