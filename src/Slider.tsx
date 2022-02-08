import React, { ReactNode }  from "react"
import Slider from "@mui/material/Slider"

function createMarks(labels: string[]): any[] {
  return labels.map((label, index) => {
    return { value: index, label }
  })
}

type Props = {
  options: string[],
  disabled: boolean,
  onChange: (value: string) => void
}

export class DiscreteSlider extends React.PureComponent<Props> {
   state = { value: 0 }

   constructor(props: any){
     super(props)
   }

  onChange = (value: string) => {
    if(this.props.onChange){
      this.props.onChange(value)
    }
  }

   render = (): ReactNode => {
    const {options = ["1","2","3"] } = this.props

    return (
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
        min={0}
        max={options.length - 1}
        step={null}
        size="small"
        value={this.state.value}
        valueLabelDisplay="off"
        marks={createMarks(options)}
        onChange={(_, value: any) => {
          const selectedOption = options[Number(value)]
          this.setState({ value })
          this.onChange(selectedOption)
        }}
        disabled={this.props.disabled}
      />
    )
  }
}



