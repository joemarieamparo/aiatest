import React from 'react'
import {render} from '@testing-library/react-native'
import ArticlesScreen from '../index'
import { getMockProfile } from '../../app/data/mocks/UserData'

const mockNavigate = jest.fn()
const goBack = jest.fn()
const createTestProps = (propsData: Object) => ({
    navigation: {
      navigate: mockNavigate,
      state: jest.fn(),
      goBack
    },
    route: {params: {articles: getMockProfile('John Doe').articles}},
    ...propsData
  })
describe('Screen: ArticlesScreen', () => {
    it('ArticlesScreen: renders correctly', () => {
        const props: any = createTestProps({})
        const {toJSON} = render(<ArticlesScreen {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})