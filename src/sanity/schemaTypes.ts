import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './schemas/blockContent'
import teamMember from './schemas/teamMember'
import pageAssets from './schemas/pageAssets'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageAssets, teamMember, blockContent],
}
