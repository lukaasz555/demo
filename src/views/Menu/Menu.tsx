import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../../components/atoms/Loader/Loader';
import { useQuery } from 'graphql-hooks';
import Error from '../../components/atoms/Error/Error';
import MenuItem from '../../components/atoms/MenuItem/MenuItem';
import { capitalLetter } from '../../helpers/helpers';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 30vh;

	.menu-items {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 2em;
	}
`;

const MenuList = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledButton = styled.button`
	padding: 0.5em 0.25em;
	margin: 0 0.25em;
	border: none;
	background: transparent;
	cursor: pointer;
	font-family: 'Merriweather', serif;
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.gray};
	transition: color 0.25s;
	&:hover {
		color: ${({ theme }) => theme.colors.black};
	}
`;

const menu_query = `
{
	allCourses {
	  id
	  name
	  price
	  desc
	  category
	}
  }
`;

interface MenuItemProps {
	name: string;
	price: number;
	desc?: string;
	category: string;
	id: string;
}

const Menu: FC = () => {
	const { loading, error, data } = useQuery(menu_query);
	const [menu, setMenu] = useState<MenuItemProps[] | []>([]);
	const [categories, setCategories] = useState<string[]>([]);
	const [isActive, setActive] = useState<boolean>(false);

	const getCategories = (): string[] => {
		if (data) {
			const res: string[] = Array.from(
				new Set(data.allCourses.map((i: { category: string }) => i.category))
			);
			return res;
		} else {
			return [];
		}
	};

	useEffect(() => {
		if (data) {
			const def = data.allCourses.filter(
				(i: MenuItemProps) => i.category === 'starters'
			);
			setMenu(
				def.sort((a: MenuItemProps, b: MenuItemProps) => b.price - a.price)
			);
			getMenuItems('starters');
		}
	}, [data]);

	const handleMenu = (category: string) => {
		if (data) {
			const filtered = data.allCourses.filter(
				(i: MenuItemProps) => i.category === category
			);
			setMenu(filtered);
		}
	};

	const getMenuItems = (category: string) => {
		const set: string[] = Array.from(
			new Set(data.allCourses.map((i: { category: string }) => i.category))
		);
		setCategories(set);
	};

	return (
		<Wrapper>
			{!data ? null : (
				<div className='menu-items'>
					{getCategories().map((c: string) => (
						<StyledButton key={c} onClick={(e) => handleMenu(c)}>
							{capitalLetter(c)}
						</StyledButton>
					))}
				</div>
			)}

			{data ? (
				<MenuList>
					{menu.map((i: MenuItemProps) => (
						<MenuItem
							id={i.id}
							name={i.name}
							price={i.price}
							desc={i.desc}
							category={i.category}
						/>
					))}
				</MenuList>
			) : null}

			{loading ? <Loader /> : null}
			{error ? <Error /> : null}
		</Wrapper>
	);
};

export default Menu;
