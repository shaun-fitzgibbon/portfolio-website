// const Wrapper = styled('div', {
//   display: 'flex',
//   width: '300px',
// })

// const Content = styled('div', {
//   height: '500px',
//   overflowY: 'scroll',

//   '&::-webkit-scrollbar': {
//     WebkitAppearance: 'none',
//     width: '8px',
//   },

//   '&::-webkit-scrollbar-track': {
//     backgroundColor: 'hsla(var(--palette-gray-30), 0.2)',
//     borderRadius: '8px',
//   },

//   '&::-webkit-scrollbar-thumb': {
//     borderRadius: '8px',
//     backgroundColor: 'var(--maximeheckel-colors-typeface-tertiary)',
//   },
// })

// const TableOfContent = styled('div', {
//   width: '100px',
// })

// const List = styled('ul', {
//   position: 'absolute',
// })

// const Section = styled('section', {
//   height: '500px',
//   width: '175px',
//   display: 'block !important',
//   background: 'var(--maximeheckel-colors-body)',
// })

// /* ***********************************************************************************

// ARTICLE

// *********************************************************************************************/

// const Article = () => {
//   const ids = ['part1', 'part2', 'part3']
//   const [elements, setElements] = React.useState([])
//   const [currentActiveIndex] = useScrollspy(elements, {
//     root: document.querySelector('#demo-root'),
//     offset: 20,
//   })

//   /**
//    You can ignore this, it's only here so it plays nicely with SSR :)
//   */
//   React.useEffect(() => {
//     const widgetElements = ids.map((item) =>
//       document.querySelector(`section[id="${item}"]`)
//     )

//     setElements(widgetElements)
//   }, [])

//   return (
//     <Wrapper>
//       <TableOfContent>
//         <List>
//           {ids.map((id, index) => (
//             <li
//               key={id}
//               style={{
//                 color:
//                   currentActiveIndex === index
//                     ? 'var(--maximeheckel-colors-brand)'
//                     : '',
//               }}
//             >
//               Part {index + 1}
//             </li>
//           ))}
//         </List>
//       </TableOfContent>

//       <Content id="demo-root">
//         {ids.map((id, index) => (
//           <Section key={id} id={id}>
//             <div>Part {index + 1}</div>
//             Some Content
//           </Section>
//         ))}
//       </Content>
//     </Wrapper>
//   )
// }

// const Example = () => {
//   /**
//    You can ignore this, it's only here so it plays nicely with SSR :)
//   */
//   if (typeof window === 'undefined') {
//     return null
//   }

//   return <Article />
// }

// render(<Example />)
export {}
