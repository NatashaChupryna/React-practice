import {PureComponent} from 'react'
import Select from 'react-select'
import { fetchBreeds } from '../Api/API'
import styled from '@emotion/styled';


  export class BreedSelect extends PureComponent {
state ={
    breeds : [],
    isLoading : false,
    error : null
}
async componentDidMount(){
    try {
    this.setState({isLoading : true})
       const breeds = await fetchBreeds() 
       this.setState({breeds})

    } catch (error) {
        this.setState({error : 'Something went wrong. Please reload page'})
    }finally{
        this.setState({isLoading : false})
    }
}
    render(){
        const options = this.state.breeds.map(breed => ({
            label : breed.name,
            value : breed.id
        }))

        return(
            <div>
                <StyledSelect options={options} onChange={option => this.props.onSelect(option.value)}/>    
            {this.state.isLoading && <div>Loading...</div>}
            {this.state.error && <p style={{color : 'red'}}>{this.state.error}</p> }
            </div>
        )
    }
  }

  const StyledSelect = styled(Select)`
    width: 500px;
    margin-bottom: 20px;
  `