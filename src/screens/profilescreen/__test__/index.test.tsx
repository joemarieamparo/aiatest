import React from 'react'
import {render} from '@testing-library/react-native'
import ProfileScreen from '../index'
import { getMockProfile } from '../../app/data/mocks/UserData'

const mockNavigate = jest.fn()
const goBack = jest.fn()
const createTestProps = (propsData: Object) => ({
    navigation: {
      navigate: mockNavigate,
      state: jest.fn(),
      goBack
    },
    route: {params: {userProfile: getMockProfile('John Doe')}},
    ...propsData
  })
describe('Screen: ProfileScreen', () => {
    it('ProfileScreen: renders correctly', () => {
        const props: any = createTestProps({})
        const {toJSON} = render(<ProfileScreen {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})