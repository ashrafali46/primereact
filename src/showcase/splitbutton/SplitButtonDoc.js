import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class SplitButtonDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Growl } from 'primereact/growl';

export class SplitButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];

        this.save = this.save.bind(this);
    }

    save() {
        this.growl.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el}></Growl>

                <div className="card">
                    <h5>Basic</h5>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items}></SplitButton>

                    <h5>Severities</h5>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-secondary p-mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-success p-mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-info p-mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-warning p-mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-help p-mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-danger p-mr-2"></SplitButton>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useRef } from 'react';
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

const SplitButtonDemo = () => {
    let growl = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                growl.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                growl.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:() => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:() => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        growl.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div className="splitbutton-demo">
            <Growl ref={growl}></Growl>

            <h3 className="first">Basic</h5>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

            <h5>Severities</h5>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-secondary"></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-info" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-danger" style={{marginRight: '.25em'}}></SplitButton>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

const SplitButtonDemo = () => {
    let growl = useRef<any>(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                growl.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                growl.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:() => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:() => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        growl.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div className="splitbutton-demo">
            <Growl ref={growl}></Growl>

            <h3 className="first">Basic</h5>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

            <h5>Severities</h5>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-secondary"></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-info" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-danger" style={{marginRight: '.25em'}}></SplitButton>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.splitbutton-demo p-splitbutton {
    margin-right: .5em;
}
            `
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import {SplitButton} from 'primereact/splitbutton';

`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
                        <CodeHighlight lang="js">
{`
export class SplitButtonDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: (e) => {
                        this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: (e) => {
                        this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    command:(e) => {
                        window.location.href = 'https://facebook.github.io/react/'
                    }
                },
                {   label: 'Upload',
                    icon: 'pi pi-upload',
                    command:(e) => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]
        }

        this.save = this.save.bind(this);
    }

    save() {
        this.growl.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items}></SplitButton>
        )
    }
}

`}
</CodeHighlight>

                        <h5>MenuModel API</h5>
                        <p>SplitButton uses the common MenuModel API to define the items, visit <Link to="/menumodel">MenuModel API</Link> for details.</p>

                        <h5>Severity</h5>
                        <p>Different color options are available as severity levels.</p>

                        <ul>
                            <li>.p-button-secondary</li>
                            <li>.p-button-success</li>
                            <li>.p-button-info</li>
                            <li>.p-button-warning</li>
                            <li>.p-button-danger</li>
                        </ul>

<CodeHighlight>
{`
<SplitButton label="Primary" />
<SplitButton label="Secondary" className="p-button-secondary" model={this.state.items} />
<SplitButton label="Success" className="p-button-success" model={this.state.items} />
<SplitButton label="Info" className="p-button-info" model={this.state.items} />
<SplitButton label="Warning" className="p-button-warning" model={this.state.items} />
<SplitButton label="Danger" className="p-button-danger" model={this.state.items} />

`}
</CodeHighlight>

                        <h5>Properties</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Identifier of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>MenuModel instance to define the overlay items.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>menuStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>menuClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName class of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the dialog should be mounted.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content of the tooltip.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltipOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onClick</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when main button is clicked.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-splitbutton</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-splitbutton-button</td>
                                        <td>Dropdown button.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menu</td>
                                        <td>Overlay menu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="SplitButtonDemo" sources={this.sources} extFiles={this.extFiles} />
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}
