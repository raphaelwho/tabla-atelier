import Related from '../client/components/related/Related.jsx'
import { italics } from '../server/config.js'
import { mount } from 'enzyme'
const warp=()=>{
  mount(
    <Related id={22128}/>
  )
}
describe('test', ()=>
{
  it('Did render',()=>{
    const app =wrap()
    expect(app.find(Card)).toBeCalled()
    app.unmount()
  })
})