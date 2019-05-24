import React, { useEffect, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getGroupUsers, getGroupRecipes } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Group = props => {

    const { user } = useContext(AuthContext)

    const group_id = props.match.params.group_id

    useEffect(() => {
        getGroupUsers(group_id)
        getGroupRecipes(group_id)
    },[])

    const groupUsers = useSelector(appstate => appstate.groupUsers)
    const currentGroup = useSelector(appstate => appstate.currentGroup)
    const groupRecipes = useSelector(appstate => appstate.groupRecipes)

    console.log(groupRecipes)

    return (

        <div>
         <Header />
          <div className = "groupViewContainer">
          <div className='divHeader'>
          <Link 
            to='/user_groups'>
             <FontAwesomeIcon className='faBack2' icon="arrow-left" />
            </Link>
        <div className='space'></div>
        <h1 className='group-recipe-name'>{currentGroup}'s Recipes</h1>
        </div>
        
         <div className='groupWrapper'>
           <div className='groupViewDiv'>
      
           <div className='membersList'>
            {/* <h3>{currentGroup} members:</h3> */}
             <ul className='groupUsers'>
               {groupUsers.map((user, i) => (
                    <li 
                     className='groupUserLI'
                     key={`user - `+i}>
                      <Link 
                       to={"/userProfile/"+user.username}>
                        <p className='groupUserP'>
                          {user.username}
                        </p>
                     </Link>   
                    </li>
                ))}
            </ul>
            <div className='invisible'></div>
           
                <Link to={`/group/${group_id}/inviteUser`}>
                        <button className='abutton'>Invite a user</button>
                </Link>
           
            </div>
            
            <div className='groupRecipesDiv'>
          {/* <h1 className='currentGroup'>{currentGroup} recipes:</h1> */}
            <ul className='groupUL'>
            {groupRecipes.map((recipe, i) => (
                    <li className='groupUserLI' key={`recipe - `+i}>
                        <Link to={`/${currentGroup}/Recipes/` + recipe.recipe_id}>
                            <div className='groupRecipe-Div'>
                              <p className='groupUserP'>
                                        {recipe.name == null ? "Unnamed Recipe" : recipe.name}
                                    </p>
                            </div>
                        </Link>   
                    </li>
                ))}
            </ul>
            </div>
            </div>
            
            </div>


        </div>
        <Footer />
        </div>


    )
}

export default Group
