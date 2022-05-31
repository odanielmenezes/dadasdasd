import styled from "styled-components"
import MarteFoto from "../../assets/marte-planet.jpg"

const primary = "#23A8F2"

const style_component = styled.div`
        .component-marte {
            width: 100%;
            height: 100vh;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            .photo-zoom {
                position: fixed;
                width: 100%;
                height: 100vh;
                background-color: rgba(0,0,0, .8);
                z-index: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: auto;

                img {
                    display: flex;
                    background-color: #000;
                    margin: 0 auto;
                    height: 95vh;
                    width: 100%;
                    border: 3px solid #23A8F2;
                    animation: zoom-in .3s ease-in-out;
                }
                svg {
                    position: absolute;
                    right: 0;
                    margin: 0 30px;
                    font-size: 36px;
                    cursor: pointer;
                }

                @keyframes zoom-in {
                    from {transform: scale(0);}
                    to {transform: scale(10deg);}
                }
            }
            .none-item {
                display: none;
            }
            .content_inrow {
                display: flex;
                justify-content: space-between;

                .next {
                    display: flex;
                    align-self: center;
                    border: 2px solid ${primary};
                    padding: 15px;
                    border-radius: 50px;
                    transition: .2s;
                    margin: 0 0 10px 10px;

                    svg {
                        font-size: 22px;
                    }
                    :hover {
                        background-color: ${primary};
                        transition: .2s;
                        cursor: pointer;

                        svg {
                            color: #FFF;
                        }
                    }
                }
                .content {
                    width: 100vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .button_previous {
                        display: flex;
                        flex-direction: column;
                        height: 10px;
                    }
                    .button_next {
                        display: flex;
                        flex-direction: column;
                        height: 10px;
                    }
                }
                .previous {
                    display: flex;
                    align-self: center;
                    border: 2px solid ${primary};
                    padding: 15px;
                    border-radius: 50px;
                    transition: .2s;
                    margin: 0 10px 10px 0;

                    svg {
                        font-size: 22px;
                    }
                    :hover {
                        background-color: ${primary};
                        transition: .2s;
                        cursor: pointer;

                        svg {
                            color: #FFF;
                        }
                    }
                }
                .infos_page {
                    background-image: url(${MarteFoto});
                    background-attachment:fixed;
                    background-repeat: no-repeat;
                    background-size: 40%;                    
                    height: 100vh;
                    display: flex;
                    width: 40vw;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 50px;
                    box-shadow: 4px 4px 6px rgba(0,0,0, .8);

                    b {
                        color: #202124;
                    }
                    h1 {
                        font-size: 46px;
                        text-shadow: 1px 1px 6px rgba(0,0,0, .8);
                    }
                    small {
                        font-style: italic;
                        font-size: 18px;
                    }
                }
                .cont {
                    color: #DEDEDE;
                    height: 20px;
                    display: flex;
                    align-self: flex-end;
                    align-items: center;
                    position: absolute;
                    bottom: 1%;
                    padding: 10px 0;
                    top: 85%;
                    width: 680px;
                    border: 2px solid #202124;
                    margin: 0 0 0 -10px;
                    display: flex;
                    flex-direction: column;

                    .select_hover {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        min-width: 310px;

                        small {
                            font-size: 16px;
                        }
                        select, input {
                            outline: none;
                            font-size: 16px;
                            margin-left: 5px;
                            background: none;
                            padding: 5px;
                            border: 1px solid #000;
                            color: ${primary};
                            border: none;
                            border-bottom: 1px solid ${primary};


                            option {
                                color: #202124;
                                padding: 5px;
                                font-size: 16px;
                                background-color: ${primary};
                            }
                        }
                        input {
                            width: 130px;
                        }
                    }
                    button {
                        cursor: pointer;
                        font-size: 16px;
                        padding: 6px;
                        color: #FFF;
                        background: ${primary};
                        border: none;
                        width: 100%;
                        margin: 20px 0;
                    }
                }
                .content_incolumn {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 70vh;
                    overflow-y: auto;
                    margin: 30px;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;

                    .no-data {
                        margin: auto 0;
                        display: flex;
                        width: 680px;
                        justify-content: center;

                        svg {
                            margin: 0 10px;
                            color: ${primary};
                        }
                    }

                    img {
                        cursor: zoom-in;
                        width: 680px;
                        animation: slider .5s normal;
                    }

                    @keyframes slider {
                        from {transform: scale(0);}
                        to {transform: scale(10deg);}
                    }
                }
                .content_incolumn::-webkit-scrollbar {
                    width: 10px;
                }
                .content_incolumn::-webkit-scrollbar-track {
                    background: transparent;
                }
                .content_incolumn::-webkit-scrollbar-thumb {
                    background: ${primary};
                    border-radius: 10px;
                    border: 2px solid #000;
                    }
                }
        }
    `
export default style_component;