import React from 'react'
import {render} from '@testing-library/react-native'
import Profile from '../index'
import { getMockProfile } from '../../../screens/app/data/mocks/UserData'

const createTestProps = (propsData: Object) => ({
    ...propsData
  })
describe('Screen: Profile', () => {
    it('Profile: renders correctly', () => {
        const props: any = createTestProps({
          userProfile: getMockProfile('John Doe'),
          onItemClick: jest.fn(),
          onPressArticles: jest.fn()
        })
        const {toJSON} = render(<Profile {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})