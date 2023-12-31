import {reqGetSearchInof} from "../api"

const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList
        }
}
const actions={
    // 获取search模块数据
    async getSearchList({commit},params={}) {
        let result = await reqGetSearchInof(params)
        if(result.code===200) {
            commit('GETSEARCHLIST',result.data)
        }
    }
}
const getters = {
    goodsList(state) {
        return state.searchList.goodsList||[]
    },
    trademarkList(state) {
        return state.searchList.trademarkList||[]
    },
    attrsList(state) {
        return state.searchList.attrsList||[]
    },
    
}

export default{
    state,
    mutations,
    actions,
    getters
}