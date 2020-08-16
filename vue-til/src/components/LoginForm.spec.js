import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운트되면 화면에 그려져야 한다.', () => {
    const instance = new Vue(LoginForm).$mount();
    // console.log(instance);
    expect(instance.username).toBe('');
  });
});
