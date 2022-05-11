import React from 'react'
import {render} from '@testing-library/react-native'
import ArticleItemComponent from '../index'
import { getMockProfile } from '../../../screens/app/data/mocks/UserData'

const mockNavigate = jest.fn()
const goBack = jest.fn()
const createTestProps = (propsData: Object) => ({
    navigation: {
      navigate: mockNavigate,
      state: jest.fn(),
      goBack
    },
    route: {params: {article: getMockProfile('John Doe').articles[0]}},
    ...propsData
  })
describe('Screen: ArticleItemComponent', () => {
    it('ArticleItemComponent: renders correctly', () => {
        const props: any = createTestProps({
          article: getMockProfile('John Doe').articles[0],
          onItemClick: jest.fn()
        })
        const {toJSON} = render(<ArticleItemComponent {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})