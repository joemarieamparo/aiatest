import React from 'react'
import {render} from '@testing-library/react-native'
import Avatar from '../index'
import { getMockProfile } from '../../../screens/app/data/mocks/UserData'

const createTestProps = (propsData: Object) => ({
    ...propsData
  })
describe('Screen: Avatar', () => {
    it('Avatar: renders correctly', () => {
        const props: any = createTestProps({
          image: 'image',
          style: {}
        })
        const {toJSON} = render(<Avatar {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})