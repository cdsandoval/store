import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
