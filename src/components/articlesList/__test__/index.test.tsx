import React from 'react'
import {render} from '@testing-library/react-native'
import ArticleList from '../index'
import { getMockProfile } from '../../../screens/app/data/mocks/UserData'

const mockNavigate = jest.fn()
const goBack = jest.fn()
const createTestProps = (propsData: Object) => ({
    navigation: {
      navigate: mockNavigate,
      state: jest.fn(),
      goBack
    },
    ...propsData
  })
describe('Screen: ArticleList', () => {
    it('ArticleList: renders correctly', () => {
        const props: any = createTestProps({
          articles: getMockProfile('John Doe'),
          onItemClick: jest.fn(),
          header: 'Test Header'
        })
        const {toJSON} = render(<ArticleList {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})