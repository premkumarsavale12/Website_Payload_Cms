import { Block } from "payload";




export const Slider: Block = {

    slug: "slider",
    interfaceName: "slider",
    labels: {
        singular: 'slider',
        plural: 'sliders'
    },
    fields: [
        {
            name: "sliders",
            type: 'array',
            label: 'Slider',
            minRows: 2,
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