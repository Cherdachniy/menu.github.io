const data = [
    {
        name: 'Menu 1',
        href: '#category1',
        submenu: [
            {
                name: 'Submenu 1.1',
                href: '#category11',
                submenu: [
                    {
                        name: 'Link 1.1.1',
                        href: '#hello'
                    }
                ]
            },
            {
                name: 'Submenu 1.2',
                href: '#category12',
                submenu: [
                    {
                        name: 'Link 1.2.1',
                        href: '#hello'
                    },
                    {
                        name: 'Link 1.2.2',
                        href: '#hello'
                    }
                ]
            },
            {
                name: 'Submenu 1.3',
                href: '#category13',
                submenu: [
                    {
                        name: 'Link 1.3.1',
                        href: '#hello'
                    },
                    {
                        name: 'Link 1.3.2',
                        href: '#hello'
                    },
                    {
                        name: 'Link 1.3.3',
                        href: '#hello'
                    }
                ]
            }
        ]
    },
    {
        name: 'Menu 2',
        href: '#category2',
        submenu: []
    },
    {
        name: 'Menu 3',
        href: '#category3',
        submenu: [
            {
                name: 'Submenu 3.1',
                href: '#category31',
                submenu: [
                    {
                        name: 'Link 3.1.1',
                        href: '#hello'
                    }
                ]
            },
            {
                name: 'Submenu 3.2',
                href: '#category32',
                links: []
            },
            {
                name: 'Submenu 3.3',
                href: '#category33',
                submenu: [
                    {
                        name: 'Link 3.3.1',
                        href: '#hello'
                    }
                ]
            }
        ]
    },
    {
        name: 'Menu 4',
        href: '#category4',
        submenu: [
            {
                name: 'Submenu 4.1',
                href: '#category41',
                submenu: [
                    {
                        name: 'Link 4.1.1',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.1.2',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.1.3',
                        href: '#hello'
                    }
                ]
            },
            {
                name: 'Submenu 4.2',
                href: '#category43',
                submenu: [
                    {
                        name: 'Link 4.2.1',
                        href: '#hello'
                    }
                ]
            },
            {
                name: 'Submenu 4.3',
                href: '#category44',
                submenu: [
                    {
                        name: 'Link 4.3.1',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.2',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.3',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.4',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.5',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.6',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.7',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.8',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.9',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.10',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.11',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.12',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.13',
                        href: '#hello'
                    },
                    {
                        name: 'Link 4.3.14',
                        href: '#hello'
                    }
                ]
            }
        ]
    },
    {
        name: 'Menu 5',
        href: '#category2',
        submenu: []
    },
    {
        name: 'Menu 6',
        href: '#category2',
        submenu: []
    }
];
const mobileMenu = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.navigation');

function createMenuItem(data, $container) {
    let $item = document.createElement('div');
    $item.classList.add('menu-item');
    let $link = document.createElement('a');
    $link.innerText = data.name;
    $link.href = data.href;
    $item.append($link);
    if (Array.isArray(data.submenu) && data.submenu.length) {
        let $arrow = document.createElement('div');
        $arrow.classList.add('arrow');
        $arrow.addEventListener('click', (e) => {
            Array.from($container.children).forEach(($el) => {
                if ($el !== $item) {
                    $el.classList.remove('active');
                }
            });
            console.log(e.target);
            console.log(e.target.getBoundingClientRect().top);
            setTimeout(() => {
                mobileMenu.scrollTo({
                    behavior: 'smooth',
                    top: mobileMenu.scrollTop + e.target.getBoundingClientRect().top - 50
                });
            }, 150);
            $item.classList.toggle('active');
        });
        $item.append($arrow);

        let $submenuContainer = document.createElement('div');
        $submenuContainer.classList.add('submenu');
        $item.append($submenuContainer);
        data.submenu.forEach((i) => createMenuItem(i, $submenuContainer));
    }
    $container.append($item);
}

for (const item of data) {
    createMenuItem(item, mobileMenu);
    createMenuItem(item, navigation);
}

let $burger = document.createElement('div');
$burger.classList.add('burger');
for (let i = 0; i < 3; i++) {
    let $stick = document.createElement('div');
    $burger.append($stick);
}
Array.from($burger.children).forEach((el) => {
    if (el === $burger.firstChild) {
        el.classList.add('top');
    } else if (el === $burger.lastChild) {
        el.classList.add('bottom');
    } else {
        el.classList.add('middle');
    }
});
$burger.addEventListener('click', () => {
    Array.from($burger.children).forEach((el) => {
        el.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})
document.querySelector('header').append($burger);

