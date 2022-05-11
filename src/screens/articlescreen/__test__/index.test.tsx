import React from 'react'
import {render} from '@testing-library/react-native'
import ArticleScreen from '../index'
import { getMockProfile } from '../../app/data/mocks/UserData'

const mockNavigate = jest.fn()
const goBack = jest.fn()
const createTestProps = (propsData: Object) => ({
    navigation: {
      navigate: mockNavigate,
      state: jest.fn(),
      goBack
    },
    route: {
      params: {
        article: getMockProfile('John Doe').articles[0],
        likes: 1,
        isLiked: false,
        currentUser: getMockProfile('John Doe')
      }
    },
    ...propsData
  })
  jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')

describe('Screen: ArticleScreen', () => {
    it('ArticleScreen: renders correctly', async () => {
        const props: any = createTestProps({})
        const {toJSON} = render(<ArticleScreen {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})