import {request} from './api.js'
import ImageViwer from './ImageViewr.js'
import Nodes from "./Nodes.js"

export default function App({$target}){
    this.state ={
        isRoot: true,
        nodes: []
    }
    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
            selectedImageUrl: null
        },
        onClick: async(node) => {
            if(node.type === 'DIRECTORY'){
                await fetchNodes(node.id)
            }

            if(node.type === 'FILE'){
                this.setState({
                    ...this.state,
                    selectedImageUrl: ` https://cat-photos-dev-serverlessdeploymentbucket-fdpz0swy5qxq.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}`
                })
            }
        }
    })

    const imageViwer = new ImageViwer({
        $target
    })

    this.setState = nextState => {
        this.state = nextState

        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })

        imageViwer.setState({
            selectedImageUrl: this.state.selectedImageUrl
        })
    }

    const fetchNodes = async (id) => {
        const nodes = await request(id ? `/${id}` : `/`)

        this.setState({
            ...this.state,
            nodes,
            isRoot: id ? false : true
        })
    }
    fetchNodes()
}