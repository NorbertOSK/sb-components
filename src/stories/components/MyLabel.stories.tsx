import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";


export default {
    title: 'UI/MyLabel', //si le poemos "example" va dentro de ese menu
    component: MyLabel,
    argTypes: {
        size: { control: 'select'},
        color: {control: 'select'},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({}); //crea una copia del template, rompiendo referencia de js con los objetos
Basic.args = {
    size: 'normal',
    allCaps: false //true: capitalizar toda la palabra
}


export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' //primary | secondary | tertiary
}
export const Tertiary = Template.bind({});
Tertiary.args= {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#9e0fe0'
}

export const CustomBacgroundColor = Template.bind({});
CustomBacgroundColor.args = {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
}