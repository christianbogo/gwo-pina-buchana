import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import project from './schemas/project'
import teamMember from './schemas/teamMember'
import neighborhood from './schemas/neighborhood'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, project, teamMember, neighborhood, category, blockContent],
}
