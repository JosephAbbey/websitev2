import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaSubscript,
    FaSuperscript,
} from 'react-icons/fa';
import styles from '../css/WYSIWYG.module.css';

interface WYSIWYGProps {
    content?: string;
}

class WYSIWYG extends Component<WYSIWYGProps> {
    constructor(props: WYSIWYGProps) {
        super(props);
    }

    surround(eln: string) {
        var sel, range;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                // add commonAncestry detection for removal of styling
                var a = document.createElement('div');
                a.appendChild(range.cloneContents());
                while (a.querySelector(eln)) {
                    var b = a.querySelector(eln);
                    if (b) {
                        b.childNodes.forEach((e) => {
                            a.insertBefore(e, b);
                        });
                        b.remove();
                    }
                }
                var text = '<' + eln + '>' + a.innerHTML + '</' + eln + '>';
                range.deleteContents();

                // Range.createContextualFragment() would be useful here but is
                // non-standard and not supported in all browsers (IE9, for one)
                var el = document.createElement('div');
                el.innerHTML = text;
                var frag = document.createDocumentFragment(),
                    node,
                    lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
            //@ts-ignore
        } else if (document.selection && document.selection.type != 'Control') {
            alert('IE is not supported.');
        }
    }

    render() {
        return (
            <div style={{ margin: '10px' }} className={styles.outer}>
                <ButtonToolbar className={styles.head}>
                    <ButtonGroup className={styles['btn-group']}>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.surround('b');
                            }}
                        >
                            <FaBold></FaBold>
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.surround('i');
                            }}
                        >
                            <FaItalic></FaItalic>
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.surround('del');
                            }}
                        >
                            <FaStrikethrough></FaStrikethrough>
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.surround('ins');
                            }}
                        >
                            <FaUnderline></FaUnderline>
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className={styles['btn-group']}>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.surround('del');
                            }}
                        >
                            <FaSubscript></FaSubscript>
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.surround('ins');
                            }}
                        >
                            <FaSuperscript></FaSuperscript>
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <div className={styles.main} contentEditable></div>
            </div>
        );
    }
}
export default WYSIWYG;
