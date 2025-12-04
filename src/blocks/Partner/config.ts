import { Block } from "payload";



export const Partner: Block = {
    slug: 'partner',
    interfaceName: 'partner',
    labels:
    {
        singular: 'partner',
        plural: 'partners'
    },

    fields: [
        {
            name: 'Heading',
            type: 'text',
            label: 'Heading',
            required: true
        },

        {
            name: 'logos',
            type: 'array',
            label: 'logos',
            minRows: 5,
            fields: [
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ]
}