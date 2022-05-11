import React from 'react'
import {render} from '@testing-library/react-native'
import Followers from '../index'
import { getMockProfile } from '../../../screens/app/data/mocks/UserData'

const createTestProps = (propsData: Object) => ({
    ...propsData
  })
describe('Screen: Followers', () => {
    it('Followers: renders correctly', () => {
        const props: any = createTestProps({
          user: getMockProfile('John Doe').profile,
          onItemClick: jest.fn(),
        })
        const {toJSON} = render(<Followers {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})