import React from 'react'
import {Bar,Line,Pie,Radar} from 'react-chartjs-2';
import Chart from './Chart'

export default class Favorites extends React.Component{

    state={
        favorites:[],
        favorites_obj:{},
        user:this.props.user
    }
    componentDidMount(){
        // console.log(this.state.user.username)
        if(this.state.user){
        fetch(`http://localhost:3000/users/${this.state.user.id}`)
        .then(res=>res.json())
        .then(pojos=>{
            let favorites_names=pojos.favorites.map(element=>element.baby_name)
            let favorites_names_objects={}
            favorites_names.map(element=> 
                {
                    fetch(`http://localhost:3000/babynames/search/${element}`)
                    .then(res=>res.json())
                    .then(pojos=>{
                        favorites_names_objects[element]=pojos
                        this.setState({
                            favorites_obj:favorites_names_objects
                        }
                        // ,()=>console.log(this.state.favorites_obj)
                        )
                        
                    })

                }
            
                )
            
        }
        )
    }

        
    }



    render(){
        // console.log(Object.keys(this.state.favorites_obj))
        let objectKeys=Object.keys(this.state.favorites_obj)
        // let objectCounts={}
        let mappedEthnicities=objectKeys.map(element1=> this.state.favorites_obj[element1].map(element=>element.ethnicity))
        let mappedCounts=objectKeys.map(element1=> this.state.favorites_obj[element1].map(element=>element.count))
        // let datasetsArray=[]

        // console.log(mappedEthnicities)
        // console.log(mappedCounts)     
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
        // let randomInt=getRandomInt(0,objectKeys.length)
        // console.log(randomInt)
        let newArray=Array.from(Array(objectKeys.length).keys())
        let arrayOfComponents=newArray.map(element=><Chart chartData={{labels:mappedEthnicities[element],datasets:[{label:`stats for ${objectKeys[element]} name`,data:mappedCounts[element],backgroundColor:'rgba(255, 159, 64, 0.6)'}]}} legendPosition="top"/>)
        
        // let favorites_data={labels:mappedEthnicities[randomInt],datasets:[{label:`stats for ${objectKeys[randomInt]} name`,data:mappedCounts[randomInt],backgroundColor:'rgba(255, 159, 64, 0.6)'}]}

        return (
            <div>
                <h3>Favorites</h3>
                {arrayOfComponents}
                {/* <Chart chartData={favorites_data} legendPosition="top"/> */}
            </div>
        );

    }
}