import markdown from 'markdown-in-js'
import withDoc, { components } from '../../lib/with-doc'
import { lewi } from '../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'What is IRI',
  date: '12 March 2018',
  authors: [lewi],
  editUrl: 'pages/iri/what-is-iri.js',
})(markdown(components)`

The IOTA Reference implimentation, commonly known as IRI, is 
the reference implimentation of the IOTA 'node' software in Java. 

The IRI software enables the Tangle to operate by enabling individuals
to run the software and operate a Node. 

## The Node

Running the IRI software enables your device to communicate 
with neighbours in the peer-to-peer network that the Tangle operates
on. Any device connected to the network 


`)
