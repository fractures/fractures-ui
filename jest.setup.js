import Adapter from "enzyme-adapter-react-16"
import Enzyme, { shallow, render, mount } from "enzyme"
import React from "react"
import renderer from "react-test-renderer"

Enzyme.configure({ adapter: new Adapter() })

global.renderer = renderer
global.React = React

global.shallow = shallow
global.render = render
global.mount = mount
