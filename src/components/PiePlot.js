import React, { Component } from 'react'
import Plot from 'react-plotly.js'

export default class PiePlot extends Component {
  render() {
    return (
      <div>
        <Plot
            data={[{
                values: [55,10,65],
                labels: ['A:1','A:2','Nick'],
                type: 'pie'
            }]}
            layout={{width: 600,height:600,title: 'Legwork'}}
        />
      </div>
    )
  }
}
