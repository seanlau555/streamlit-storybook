import {DiscreteSlider} from '../Slider'

export default {
  title: 'Streamlit/Slider',
  component: DiscreteSlider,
  argTypes: {
  },
}

const Template = args => <DiscreteSlider {...args}/>

export const Default = Template.bind({})

Default.args = {
};

