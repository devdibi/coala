import {
  createQuery,
  readQuery,
  updateQuery,
  deleteQuery
} from '@/db/mysql/query/crud'

import {
  buildSchema, buildConditionQuery
} from '@/lib/queryBuilder'
type dataForm = Partial<User>;

const Read = async (target : object) => {
  try{
    const {conditionQuery, values} = buildConditionQuery(target, ' AND ');
    console.log("Check READ member", {conditionQuery, values})
    const result = await readQuery('member', {conditionQuery, values});
    return result;
  }catch(error){
    console.log(error)
  }
}


export { Read }