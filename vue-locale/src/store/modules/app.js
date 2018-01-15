import Cookie from 'js-cookie'

const app = {
    // 状态驱动着界面
    state: {
        language: Cookie.get('language') || 'en',
    },
    // 管理局部模块状态
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
            Cookie.set('language', language)
        }
    },
    // 类似外界访问接口，接受一个与 store 实例具有相同方法和属性的对象，
    // 你可以调用 xxx.commit 提交一个 mutation，或者通过xxx.state 和 xxx.getters 来获取 state 和 getters
    actions: {
        setLanguage({commit}, language) {
            commit('SET_LANGUAGE' , language);
        }
    }

}
export default app
