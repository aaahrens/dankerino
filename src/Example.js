import * as React from "react";


export class Example extends React.Component  {
    

    render(){
        return(
            <div>
                Example bullshit
                {
                    this.item['name']
                }
                item is {2 + this.item.count }
            </div>
        )
    }
}


