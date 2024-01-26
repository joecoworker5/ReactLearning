import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'can I use',
            content: 'use project'
        },{
            id: '2',
            label: 'Js', 
            content: 'Js project'
        },{
            id: '3',
            label: 'React',
            content: 'React project'
        }
    ]
    return <Accordion items={items} />;
}

export default AccordionPage
;
