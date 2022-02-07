import React, {useState}  from "react"
import Slider from "@mui/material/Slider"
import { styled } from "@mui/system"

function createMarks(labels: string[]): any[] {
  return labels.map((label, index) => {
    return { value: index, label }
  })
}

type Props = {
  options: string[],
  width: number,
  disabled: boolean,
  onChange: (value: string) => void
}

export function DiscreteSlider({
  onChange,
  disabled,
  options=["1","2","3"], 
  width=200 }: Props) 
{
  const [stateValue, setStateValue] = useState(0)
  const vMargin = 7
  const hMargin = 20
  const StyledSlider = styled(Slider)({
    margin: `${vMargin}px ${hMargin}px`,
    width: width - hMargin * 2,
  })

  const onChangeSlider = (value: string) => {
    if(onChange){
      onChange(value)
    }
  }


  return (
    <StyledSlider
      aria-label="Restricted values"
      defaultValue={0}
      min={0}
      max={options.length - 1}
      step={null}
      size="small"
      value={stateValue}
      valueLabelDisplay="off"
      marks={createMarks(options)}
      onChange={(_, value: any) => {
        const selectedOption = options[Number(value)]
        setStateValue(value)
        onChangeSlider(selectedOption)
      }}
      disabled={disabled}
    />
  )
}
