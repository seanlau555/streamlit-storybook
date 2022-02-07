import Slider from '../Slider'

export default {
  title: 'Streamlit/Slider',
  component: Slider,
  argTypes: {
  },
}

const Template = args => <Slider {...args}/>

export const Default = Template.bind({})

Default.args = {
};

