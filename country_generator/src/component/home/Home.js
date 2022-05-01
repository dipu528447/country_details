import Country from './Country';

const Home = (props) => {
    const countries = props.countries;
    return (
        <div className='container'>
            <div className='row ms-5'>
                {countries.map(item=>            
                    <Country details={item} key={item.cca2}></Country>
                )}    
            </div>            
        </div>
         
    );
};

export default Home;